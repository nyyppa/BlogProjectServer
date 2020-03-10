package oysters.resulute.the.blogServer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MyExceptionHandler {

    @ExceptionHandler(CannotFindBlogException.class)
    public ResponseEntity<ErrorInfo> handleConflict(CannotFindBlogException ex) {
        ErrorInfo e = new ErrorInfo("Could not found location with id " + ex.getBlogId());
        return new ResponseEntity<ErrorInfo>(e, HttpStatus.NOT_FOUND);
    }
}

