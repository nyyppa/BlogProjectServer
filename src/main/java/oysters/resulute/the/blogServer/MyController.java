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
    MyDatabaseHandler database;

    // curl http://localhost:8080/blogs/1
    @RequestMapping(value = "/blogs/{locationId}",  method= RequestMethod.GET)
    public ResponseEntity<Blog> fetchBlog(@PathVariable long locationId) throws CannotFindBlogException {
        Optional<Blog> location = database.findById(locationId);
        if(location.isPresent())
            return new ResponseEntity<Blog>(location.get(), HttpStatus.OK);
        else
            throw new CannotFindBlogException(locationId);
    }


    // curl http://localhost:8080/blogs/

    @RequestMapping(value = "/blogs/",  method= RequestMethod.GET)
    public Iterable<Blog> fetchAll() {
        return database.findAll();
    }



    // curl -X DELETE http://localhost:8080/delete/1
    @RequestMapping(value = "/delete/{blogId}",  method= RequestMethod.DELETE)
    public ResponseEntity<Void> deleteBlog(@PathVariable long blogId) throws CannotFindBlogException {
        if(database.existsById(blogId)) {
            database.deleteById(blogId);
            return new ResponseEntity<Void>(HttpStatus.OK);
        } else {
            throw new CannotFindBlogException(blogId);
        }
    }

    //curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d "{\"author\":\"value\",\"text\":\"moiiiii\"}" http://localhost:8080/save
    @RequestMapping("/save")
    public ResponseEntity<Blog>  saveBlogPost(@RequestBody Blog blog, UriComponentsBuilder b){
        System.out.println(blog);
        database.save(blog);
        UriComponents uriComponents =
                b.path("/locations/{id}").buildAndExpand(blog.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());
        return new ResponseEntity<Blog>(blog, headers, HttpStatus.CREATED);
    }

}
