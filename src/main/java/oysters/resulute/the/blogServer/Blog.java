package oysters.resulute.the.blogServer;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.jpa.repository.Temporal;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


/**
 * Class representing blog post.
 * Also used for database actions.
 */
    /*TODO
    timestamp
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
public class Blog implements Serializable {

    @Id
    @GeneratedValue
    private long id;
    private String author;
    private String text;

    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private Date creationTime;

    public Blog(){

    }

    public Blog(String author, String text) {
        this.author = author;
        this.text = text;
    }

    public long getId() {
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

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
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
