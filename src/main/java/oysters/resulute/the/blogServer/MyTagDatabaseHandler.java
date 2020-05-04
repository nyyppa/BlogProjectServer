package oysters.resulute.the.blogServer;

import org.springframework.data.repository.CrudRepository;

/**
 * Interface for handling tags database interactions
 */
public interface MyTagDatabaseHandler extends CrudRepository<Tag, String> {
}
