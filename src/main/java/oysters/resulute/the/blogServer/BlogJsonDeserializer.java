package oysters.resulute.the.blogServer;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
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
    public static final String commentsKey="comments";

    @Autowired
    MyTagDatabaseHandler tagDatabase;

    @Autowired
    MyCommentDatabaseHandler commentDatabase;

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
        handleTags(blog,node);
        return blog;
    }

    public void handleComments(Blog blog, JsonNode node){
        if(node.hasNonNull(commentsKey)){
            ArrayNode comments=(ArrayNode) node.get(commentsKey);
            Iterator<JsonNode>iterator=comments.iterator();
            while (iterator.hasNext()){
                JsonNode jsonNode=iterator.next();
            }
        }
    }

    public void handleTags(Blog blog, JsonNode node){
        System.out.println("hei");
        if(node.hasNonNull(tagsKey)){
            System.out.println("moi");
            ArrayNode tags= (ArrayNode) node.get(tagsKey);
            Iterator<JsonNode>iterator=tags.iterator();
            while(iterator.hasNext()){
                JsonNode jsonNode=iterator.next();
                String tagString=jsonNode.get("tagId").asText();
                System.out.println(tagString);
                Optional<Tag> tag = tagDatabase.findById(tagString);
                if(tag.isPresent()){
                    if(!tag.get().hasBlog(blog)){
                        tag.get().addBlog(blog);
                        tagDatabase.save(tag.get());
                    }
                    blog.addTag(tag.get());
                }else{
                    Tag t=new Tag(tagString);
                    t.addBlog(blog);
                    tagDatabase.save(t);
                    blog.addTag(t);
                }
            }
        }
    }
}
