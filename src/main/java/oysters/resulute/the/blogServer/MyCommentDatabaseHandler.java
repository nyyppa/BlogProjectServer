package oysters.resulute.the.blogServer;

import org.springframework.data.repository.CrudRepository;

/**
 * Interface for handling comments database interactions
 */
public interface MyCommentDatabaseHandler extends CrudRepository<Comment, Long> {
}
