package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter @Setter
public class DebateGroup {

    @EmbeddedId
    private DebateGroupId debateGroupId;

    private String subject;

    @OneToOne(mappedBy = "debateGroup", fetch = LAZY)
    private Error error;
}
