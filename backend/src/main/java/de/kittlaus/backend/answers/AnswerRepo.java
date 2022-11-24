package de.kittlaus.backend.answers;

import de.kittlaus.backend.models.answers.ValidatedAnswer;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AnswerRepo  extends MongoRepository<ValidatedAnswer,String> {
    List<ValidatedAnswer> findAllByUserIdAndIsExam(String username, boolean exam);
}
