package oysters.resulute.the.blogServer;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

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

    public Comment() {
    }

    public Comment(String author, String text, Blog parentBlog) {
        this.author = author;
        this.text = text;
        this.parentBlog = parentBlog;
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

    @Override
    public String toString() {
        return "Comment{" +
                "blogId=" + commentId +
                ", author='" + author + '\'' +
                ", text='" + text + '\'' +
                '}';
    }
}
