package oysters.resulute.the.blogServer;

import org.springframework.data.repository.CrudRepository;

public interface MyDataBaseHandler extends CrudRepository<Blog, Long> {
}
