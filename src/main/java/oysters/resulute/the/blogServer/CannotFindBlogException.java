package oysters.resulute.the.blogServer;

public class CannotFindBlogException extends IllegalArgumentException{

    private long blogId;

    public CannotFindBlogException(long id) {
        blogId = id;
    }

    public long getBlogId() {
        return blogId;
    }
}
