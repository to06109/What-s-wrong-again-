package dev.wwa.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class DebateGroupId implements Serializable {

    @Column(name = "debate_group_id")
    private int id;

    private String debate_group;
}
