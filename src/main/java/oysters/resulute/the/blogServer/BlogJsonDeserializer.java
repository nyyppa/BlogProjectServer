package oysters.resulute.the.blogServer;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.TreeNode;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.LongNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;
import java.util.Iterator;
import java.util.Optional;

@JsonComponent
public class BlogJsonDeserializer extends JsonDeserializer<Blog> {
    public static final String idKey="id";
    public static final String authorKey="author";
    public static final String textKey="text";
    public static final String tagsKey="tags";

    @Autowired
    MyTagDatabaseHandler database;

    @Override
    public Blog deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        JsonNode node= jsonParser.getCodec().readTree(jsonParser);
        long id=0;
        if(node.has(idKey)){
            id=(long) ((LongNode) node.get(idKey)).numberValue();
        }
        String author=node.get(authorKey).asText();
        String text=node.get(textKey).asText();
        Blog blog=new Blog();
        blog.setText(text);
        blog.setAuthor(author);
        blog.setBlogId(id);
        if(node.hasNonNull(tagsKey)){
            ArrayNode tags= (ArrayNode) node.get(tagsKey);
            Iterator<JsonNode>iterator=tags.iterator();
            while(iterator.hasNext()){
                JsonNode jsonNode=iterator.next();
                String tagString=jsonNode.asText();
                Optional<Tag> tag = database.findById(tagString);
                if(tag.isPresent()){
                    if(!tag.get().hasBlog(blog)){
                        tag.get().addBlog(blog);
                        database.save(tag.get());
                    }
                    blog.addTag(tag.get());
                }else{
                    Tag t=new Tag(tagString);
                    t.addBlog(blog);
                    database.save(t);
                    blog.addTag(t);
                }
            }
        }
        return blog;
    }
}
