package oysters.resulute.the.blogServer;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;


import java.util.Optional;

@RestController
public class MyController {
    @Autowired
    MyBlogDatabaseHandler blogDatabase;

    @Autowired
    MyTagDatabaseHandler tagDatabaseHandler;

    // curl http://localhost:8080/blogs/1
    @RequestMapping(value = "/blogs/{blogId}",  method= RequestMethod.GET)
    public ResponseEntity<Blog> fetchBlog(@PathVariable long blogId) throws CannotFindBlogException {
        Optional<Blog> blog = blogDatabase.findById(blogId);
        if(blog.isPresent())
            return new ResponseEntity<Blog>(blog.get(), HttpStatus.OK);
        else
            throw new CannotFindBlogException(blogId);
    }


    // curl http://localhost:8080/blogs/

    @RequestMapping(value = "/blogs/",  method= RequestMethod.GET)
    public Iterable<Blog> fetchAllBlogs() {
        return blogDatabase.findAll();
    }



    // curl -X DELETE http://localhost:8080/delete/1
    @RequestMapping(value = "/delete/{blogId}",  method= RequestMethod.DELETE)
    public ResponseEntity<Void> deleteBlog(@PathVariable long blogId) throws CannotFindBlogException {
        if(blogDatabase.existsById(blogId)) {
            blogDatabase.deleteById(blogId);
            return new ResponseEntity<Void>(HttpStatus.OK);
        } else {
            throw new CannotFindBlogException(blogId);
        }
    }
    //to modify existing blog
    //curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d "{\"id\":1,\"author\":\"value\",\"text\":\"heii\"}" http://localhost:8080/save
    //to save new blog
    //curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d "{\"author\":\"value\",\"text\":\"moiiiii\"}" http://localhost:8080/save
    //to save new blog with tags
    //curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d "{\"author\":\"value\",\"text\":\"heii\",\"tags\":[\"jorma\",\"pena\"]}" http://localhost:8080/save
    @RequestMapping("/save")
    public ResponseEntity<Blog>  saveBlogPost(@RequestBody Blog blog, UriComponentsBuilder b){
        System.out.println(blog);
        blogDatabase.save(blog);
        UriComponents uriComponents =
                b.path("/locations/{id}").buildAndExpand(blog.getBlogId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<Blog>(blog, headers, HttpStatus.CREATED);
    }

    // curl http://localhost:8080/tags/

    @RequestMapping(value = "/tags/",  method= RequestMethod.GET)
    public Iterable<Tag> fetchAllTags() {
        return tagDatabaseHandler.findAll();
    }

}
