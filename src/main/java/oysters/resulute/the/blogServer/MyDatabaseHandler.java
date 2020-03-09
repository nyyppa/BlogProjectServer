package oysters.resulute.the.blogServer;

import org.springframework.data.repository.CrudRepository;

public interface MyDatabaseHandler extends CrudRepository<Blog, Long> {
}
