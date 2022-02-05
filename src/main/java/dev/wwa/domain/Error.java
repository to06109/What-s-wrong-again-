package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.*;

@Entity
@Getter @Setter
public class Error {

    @EmbeddedId
    private ErrorId errorId;

    @ManyToMany
    @JoinTable(name = "user_error",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "error_id"))
    private List<User> users = new ArrayList<>();

    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "debateGroupId")
    private DebateGroup debateGroup;

    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "attachedGroupId")
    private AttachedGroup attachedGroup;

    private String category;

    private String errorName;

    private String contents;

    private LocalDateTime editDate;

    private int scrapeNo;

    @OneToMany(mappedBy = "documentNo", cascade = CascadeType.ALL)
    private List<Error> errors = new ArrayList<>();
}
