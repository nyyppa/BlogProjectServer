package oysters.resulute.the.blogServer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;


/**
 * Class representing blog post.
 * Also used for database actions.
 */
    /*TODO
    done timestamp
    done Tags
    visitors amount
    images
    comments
    folders
    sharing?
    Videos?
    JavaDoc
    */
@Entity
@JsonDeserialize(using = BlogJsonDeserializer.class)
//@JsonSerialize(using = BlogJsonSerializer.class)
public class Blog implements Serializable {

    @Id
    @GeneratedValue
    private long blogId;
    private String author;
    private String text;
    @ManyToMany
    @JoinTable(
            name = "blog_tags",
            joinColumns = @JoinColumn(name = "blog_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id"))
    private Set<Tag> tags;

    @JsonIgnore
    @OneToMany(mappedBy = "parentBlog", cascade = CascadeType.MERGE)
    private Set<Comment> comments;

    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private Date creationTime;

    public Blog(){

    }

    public Blog(String author, String text) {
        this.author = author;
        this.text = text;
    }


    public Set<Tag> getTags() {
        return tags;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }
    public void addTag(Tag tag){
        if(tags==null){
            tags=new HashSet<>();
        }
        tags.add(tag);
    }

    public long getBlogId() {
        return blogId;
    }

    public void setBlogId(long blogId) {
        this.blogId = blogId;
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

   public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    public void addComment(Comment comment){
        if(comments.remove(comment)){
         System.out.println("poistu");
        }
        if(comments.add(comment)){
            System.out.println("lisäs");
        }
        comment.setParentBlog(this);
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }
    public boolean hasTag(Tag tag){
        return tags.stream().filter(tag1 -> equals(tag)).findAny().isPresent();
    }

    @Override
    public boolean equals(Object obj) {
        if(obj==this){
            return  true;
        }else if(!(obj instanceof Blog)){
            return false;
        }else{
            Blog blog= (Blog) obj;
            if(blog.getBlogId()==0){
                return false;
            }else{
                return blog.getBlogId()==this.getBlogId();
            }
        }
    }

    @Override
    public String toString() {
        return "Blog{" +
                "blogId=" + blogId +
                ", author='" + author + '\'' +
                ", text='" + text + '\'' +
                ", tags=" + tags.size() +
                ", creationTime=" + creationTime +
                '}';
    }
}
