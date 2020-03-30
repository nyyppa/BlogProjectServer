package oysters.resulute.the.blogServer;

import org.springframework.data.repository.CrudRepository;

public interface MyCommentDatabaseHandler extends CrudRepository<Comment, Long> {
}
