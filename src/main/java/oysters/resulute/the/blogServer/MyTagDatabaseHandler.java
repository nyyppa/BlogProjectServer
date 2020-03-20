package oysters.resulute.the.blogServer;

import org.springframework.data.repository.CrudRepository;

public interface MyTagDatabaseHandler extends CrudRepository<Tag, String> {
}
