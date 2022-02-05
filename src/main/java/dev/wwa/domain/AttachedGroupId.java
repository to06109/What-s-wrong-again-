package dev.wwa.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class AttachedGroupId implements Serializable {

    @Column(name = "attached_group_id")
    private int id;

    private int debate_no;
}
