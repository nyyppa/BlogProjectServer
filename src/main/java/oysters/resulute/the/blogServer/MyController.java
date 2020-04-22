package oysters.resulute.the.blogServer;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;


import java.util.*;

@SpringBootApplication
@RestController
//@EnableWebMvc
public class MyController extends WebSecurityConfigurerAdapter implements WebMvcConfigurer {
    @Autowired
    MyBlogDatabaseHandler blogDatabase;

    @Autowired
    MyTagDatabaseHandler tagDatabaseHandler;

    @Autowired
    MyCommentDatabaseHandler commentDatabaseHandler;


    /*
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedMethods("GET", "POST", "DELETE");
    }*/

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http
                .authorizeRequests(a -> a
                        .antMatchers("/", "/error", "/webjars/**").permitAll()
                        .anyRequest().authenticated()
                ) .logout(l -> l
                .logoutSuccessUrl("/").permitAll()
        )
                .csrf(c -> c
                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                )
                .exceptionHandling(e -> e
                        .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                )
                .oauth2Login();
        // @formatter:on
    }
    @GetMapping("/user")
    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
        System.out.println(principal);
        return Collections.singletonMap("name", principal.getAttribute("name"));
    }

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

    //curl http://localhost:8080/search/word
    @RequestMapping("/search/{searchWord}")
    public Iterable<Blog> search(@PathVariable String searchWord){
        Set<Blog> result=blogDatabase.findByAuthorContaining(searchWord).and(blogDatabase.findByTextContaining(searchWord)).toSet();
        for(Blog blog:result){
            System.out.println(blog);
        }
        return result;
    }

    // curl http://localhost:8080/tags/
    @RequestMapping(value = "/tags/",  method= RequestMethod.GET)
    public Iterable<Tag> fetchAllTags() {
        return tagDatabaseHandler.findAll();
    }

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

    // curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d "{\"tagId\":\"jorma\"}" http://localhost:8080/blogsWithTag
    @RequestMapping(value = "/blogsWithTag", method = RequestMethod.POST)
    public Iterable<Blog> findBlogsWithTag(@RequestBody Tag tag){
        tag=tagDatabaseHandler.findById(tag.tagId).get();
        return tag.blogList;
    }



}
