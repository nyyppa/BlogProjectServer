package oysters.resulute.the.blogServer;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;


import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Optional;
import java.util.Set;

@RestController
public class MyController {
    @Autowired
    MyBlogDatabaseHandler blogDatabase;

    @Autowired
    MyTagDatabaseHandler tagDatabaseHandler;

    @Autowired
    MyCommentDatabaseHandler commentDatabaseHandler;

    /**
     * Populates the database with some dummy blogs posts and their tags
     */
    @PostConstruct
    private void init(){
        Blog blog;
        Tag tag;
        blog=new Blog();
        blog.setText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        blog.setAuthor("Jorma");
        blog.setBlogId(0);
        tag=new Tag("Esimerkki");
        tag.addBlog(blog);
        tagDatabaseHandler.save(tag);
        blog.addTag(tag);
        tag=new Tag("tagi");
        tag.addBlog(blog);
        tagDatabaseHandler.save(tag);
        blog.addTag(tag);
        blogDatabase.save(blog);

        blog=new Blog();
        blog.setText("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.");
        blog.setAuthor("Jorma");
        blog.setBlogId(0);
        tag=new Tag("Esimerkki");
        tag.addBlog(blog);
        tagDatabaseHandler.save(tag);
        blog.addTag(tag);
        tag=new Tag("tagi");
        tag.addBlog(blog);
        tagDatabaseHandler.save(tag);
        blog.addTag(tag);
        blogDatabase.save(blog);

        blog=new Blog();
        blog.setText("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");
        blog.setAuthor("Pena");
        blog.setBlogId(0);
        tag=new Tag("Lisää");
        tag.addBlog(blog);
        tagDatabaseHandler.save(tag);
        blog.addTag(tag);
        tag=new Tag("Tagejä");
        tag.addBlog(blog);
        tagDatabaseHandler.save(tag);
        blog.addTag(tag);
        blogDatabase.save(blog);

        blog=new Blog();
        blog.setText("There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.");
        blog.setAuthor("Pena");
        blog.setBlogId(0);
        tag=new Tag("Lisää");
        tag.addBlog(blog);
        tagDatabaseHandler.save(tag);
        blog.addTag(tag);
        tag=new Tag("Tagejä");
        tag.addBlog(blog);
        tagDatabaseHandler.save(tag);
        blog.addTag(tag);
        blogDatabase.save(blog);

    }

    /**
     * Tries to find blong with given blogId
     * @param blogId
     * @return
     * @throws CannotFindBlogException
     */
    // curl http://localhost:8080/blogs/1
    @RequestMapping(value = "/blogs/{blogId}",  method= RequestMethod.GET)
    public ResponseEntity<Blog> fetchBlog(@PathVariable long blogId) throws CannotFindBlogException {
        Optional<Blog> blog = blogDatabase.findById(blogId);
        if(blog.isPresent())
            return new ResponseEntity<Blog>(blog.get(), HttpStatus.OK);
        else
            throw new CannotFindBlogException(blogId);
    }


    /**
     * Finds every blog in database
     * @return
     */
    // curl http://localhost:8080/blogs/
    @RequestMapping(value = "/blogs/",  method= RequestMethod.GET)
    public Iterable<Blog> fetchAllBlogs() {
        System.out.println("BLOGS");
        return blogDatabase.findAll();
    }


    /**
     * Deletes blog with given blogID and it's comments
     * @param blogId
     * @return
     * @throws CannotFindBlogException
     */
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

    /**
     * Creates blog or if blog with same blogId already exists modifies the orginal.
     * @param blog
     * @param b
     * @return
     */
    //to modify existing blog
    //curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d "{\"id\":1,\"author\":\"value\",\"text\":\"heii\"}" http://localhost:8080/save
    //to save new blog
    //curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d "{\"author\":\"value\",\"text\":\"moiiiii\"}" http://localhost:8080/save
    //to save new blog with tags
    //curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d "{\"author\":\"value\",\"text\":\"heii\",\"tags\":[{\"tagId\":\"jorma\"},{\"tagId\":\"pena\"}]}" http://localhost:8080/save
    @RequestMapping("/save")
    public ResponseEntity<Blog>  saveBlogPost(@RequestBody Blog blog, UriComponentsBuilder b){
        System.out.println(blog);
        blogDatabase.save(blog);
        System.out.println(blog);
        UriComponents uriComponents =
                b.path("/blogs/{id}").buildAndExpand(blog.getBlogId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<Blog>(blog, headers, HttpStatus.CREATED);
    }

    /**
     * Returns blogs where either text or author contains given search word
     * @param searchWord
     * @return
     */
    //curl http://localhost:8080/search/word
    @RequestMapping("/search/{searchWord}")
    public Iterable<Blog> search(@PathVariable String searchWord){
        System.out.println(searchWord);
        Set<Blog> result=blogDatabase.findByAuthorContaining(searchWord).and(blogDatabase.findByTextContaining(searchWord)).toSet();
        for(Blog blog:result){
            System.out.println(blog);
        }
        return result;
    }

    /**
     * Returns all tags in database
     * @return
     */
    // curl http://localhost:8080/tags/
    @RequestMapping(value = "/tags/",  method= RequestMethod.GET)
    public Iterable<Tag> fetchAllTags() {
        return tagDatabaseHandler.findAll();
    }

    /**
     * Adds comment for blog with given blogId
     * @param comment
     * @param blogId
     * @param b
     * @return
     */
    // curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d "{\"author\":\"value\",\"text\":\"heii\"}" http://localhost:8080/comment/1
    //TODO add error handling
    //TODO clean uri component
    @RequestMapping(value = "/comment/{blogId}", method = RequestMethod.POST)
    public ResponseEntity<Comment>  saveComment(@RequestBody Comment comment,@PathVariable long blogId, UriComponentsBuilder b){
        Blog blog=blogDatabase.findById(blogId).get();
        System.out.println(comment);
        blog.addComment(comment);
        commentDatabaseHandler.save(comment);
        //blogDatabase.save(blog);
        UriComponents uriComponents =
                b.path("/comment/{id}").buildAndExpand(blog.getBlogId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<Comment>(comment, headers, HttpStatus.CREATED);
    }

    /**
     * Finds comments for blog with given blogId
     * @param blogId
     * @return
     * @throws CannotFindBlogException
     */
    // curl http://localhost:8080/comment/1
    @RequestMapping(value = "/comment/{blogId}",  method= RequestMethod.GET)
    public Iterable<Comment> fetchComments(@PathVariable long blogId) throws CannotFindBlogException {
        Optional<Blog> blog = blogDatabase.findById(blogId);
        if(blog.isPresent()){
            return blog.get().getComments();
        }else {
            return new ArrayList<>();
        }
    }

    /**
     * Finds blogs that have given tag
     * @param tag
     * @return
     */
    // curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d "{\"tagId\":\"jorma\"}" http://localhost:8080/blogsWithTag
    @RequestMapping(value = "/blogsWithTag", method = RequestMethod.POST)
    public Iterable<Blog> findBlogsWithTag(@RequestBody Tag tag){
        tag=tagDatabaseHandler.findById(tag.tagId).get();
        return tag.blogList;
    }



}
