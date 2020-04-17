package oysters.resulute.the.blogServer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.util.Streamable;

public interface MyBlogDatabaseHandler extends CrudRepository<Blog, Long> {
    Streamable<Blog> findByAuthorContaining(String search);
    Streamable<Blog> findByTextContaining(String search);
}
