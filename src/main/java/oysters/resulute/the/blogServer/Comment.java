package oysters.resulute.the.blogServer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

/**
 * Class representing comment given for blog post
 */
@Entity
public class Comment implements Serializable {


    @Id
    @GeneratedValue
    private long commentId;
    private String author;
    private String text;

    @ManyToOne(optional = false)
    @JoinColumn(name="blog_id",nullable = false)
    @JsonIgnore
    Blog parentBlog;



    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private Date creationTime;

    public Comment() {
    }

    public Comment(String author, String text, Blog parentBlog) {
        this.author = author;
        this.text = text;
        this.parentBlog = parentBlog;
    }

    /**
     * Copies author and text fields from given comment to this comment.
     * Use when you just want to modify existing comment.
     * @param comment
     */
    public void modifyComment(Comment comment){
        if(comment.getCommentId()==this.commentId){
            setAuthor(comment.getAuthor());
            setText(comment.getText());
        }
    }

    public long getCommentId() {
        return commentId;
    }

    public void setCommentId(long commentId) {
        this.commentId = commentId;
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

    public Blog getParentBlog() {
        return parentBlog;
    }

    public void setParentBlog(Blog parentBlog) {
        this.parentBlog = parentBlog;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comment comment = (Comment) o;
        return commentId == comment.commentId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(commentId);
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "commentId=" + commentId +
                ", author='" + author + '\'' +
                ", text='" + text + '\'' +
                ", creationTime=" + creationTime +
                '}';
    }
}
