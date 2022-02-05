package dev.wwa.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class ErrorId implements Serializable {

    @Column(name = "error_id")
    private int id;

    private int document_no;
}
