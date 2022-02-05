package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import static javax.persistence.FetchType.*;

@Entity
@Getter @Setter
public class AttachedGroup {

    @EmbeddedId
    private AttachedGroupId attachedGroupId;

    private String attached_path;

    @OneToOne(mappedBy = "attachedGroup", fetch = LAZY)
    private Error error;

    @OneToOne(mappedBy = "attachedGroup", fetch = LAZY)
    private Solution solution;
}
