package oysters.resulute.the.blogServer;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Class representing blog post.
 * Also used for database actions.
 */

@Entity
public class Blog {

    /**
     *
     */
    @Id
    @GeneratedValue
    private int id;
    private String author;
    private String text;
    /*TODO
    Tags
    visitors amount
    images
    comments
    folders
    sharing?
    Videos?
     */
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
}
