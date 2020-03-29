package oysters.resulute.the.blogServer;

import org.springframework.data.repository.CrudRepository;

public interface MyBlogDatabaseHandler extends CrudRepository<Blog, Long> {
}
