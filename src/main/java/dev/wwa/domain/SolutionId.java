package dev.wwa.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class SolutionId implements Serializable {

    @Column(name = "sol_id")
    private int id;

    private int solution_no;
}
