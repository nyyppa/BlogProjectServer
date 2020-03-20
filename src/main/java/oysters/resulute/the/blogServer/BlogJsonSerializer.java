package oysters.resulute.the.blogServer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;

@JsonComponent
public class BlogJsonSerializer extends JsonSerializer<Blog> {

    @Override
    public void serialize(Blog blog, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        System.out.println("haista paskaa");
        jsonGenerator.writeStartObject();
        jsonGenerator.writeNumberField(BlogJsonDeserializer.idKey,blog.getBlogId());
        jsonGenerator.writeStringField(BlogJsonDeserializer.authorKey,blog.getAuthor());
        jsonGenerator.writeStringField(BlogJsonDeserializer.textKey,blog.getText());
        jsonGenerator.writeArrayFieldStart(BlogJsonDeserializer.tagsKey);
        for(Tag tag:blog.getTags()){
            jsonGenerator.writeString(tag.getTagId());
        }
        jsonGenerator.writeEndArray();
        jsonGenerator.writeEndObject();
    }
}
