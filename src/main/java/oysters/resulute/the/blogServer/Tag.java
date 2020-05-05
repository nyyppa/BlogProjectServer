package oysters.resulute.the.blogServer;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Class representing tags for blogs
 */
@Entity
public class Tag implements Serializable {

    @Id
    String tagId;

    @JsonIgnore
    @ManyToMany(mappedBy = "tags")
    Set<Blog> blogList;

    public Tag(String tagId) {
        this.tagId = tagId;
    }

    public Tag(String tagId, Set<Blog> blogList) {
        this.tagId = tagId;
        this.blogList = blogList;
    }

    public Tag(){

    }

    public String getTagId() {
        return tagId;
    }


    public void setTagId(String tagId) {
        this.tagId = tagId;
    }

    /**
     * Adds blog for already existing tag
     * @param blog
     */
    public void addBlog(Blog blog){
        if(blogList==null){
            blogList=new HashSet<>();
        }
        blogList.add(blog);
    }
    public Set<Blog> getBlogList() {
        return blogList;
    }

    public void setBlogList(Set<Blog> blogList) {
        this.blogList = blogList;
    }

    public boolean hasBlog(Blog blog){
        return blogList.stream().filter(blog1 -> equals(blog)).findAny().isPresent();
    }

    @Override
    public boolean equals(Object obj) {
        if(obj==this){
            return  true;
        }else if(!(obj instanceof Tag)){
            return false;
        }else {
            Tag tag=(Tag) obj;
            return tag.getTagId().equals(this.getTagId());
        }
    }

    @Override
    public String toString() {
        return "Tag{" +
                "tagId='" + tagId + '\'' +
                //", blogList=" + blogList +
                '}';
    }
}
