package oysters.resulute.the.blogServer;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Class representing blog post.
 * Also used for database actions.
 */
    /*TODO
    Tags
    visitors amount
    images
    comments
    folders
    sharing?
    Videos?
    JavaDoc
    */
@Entity
public class Blog {

    @Id
    @GeneratedValue
    private int id;
    private String author;
    private String text;

    public Blog(@JsonProperty("author") String author, @JsonProperty("text") String text) {
        this.author = author;
        this.text = text;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", author='" + author + '\'' +
                ", text='" + text + '\'' +
                '}';
    }
}
