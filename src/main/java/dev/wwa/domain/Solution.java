package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter @Setter
public class Solution {

    @EmbeddedId
    private SolutionId solutionId;

    @ManyToMany
    @JoinTable(name = "user_solution",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "sol_id"))
    private List<User> users = new ArrayList<>();

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "errorId")
    private Error documentNo;

    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "attachedGroupId")
    private AttachedGroup attachedGroup;

    private int numbering;

    private String contents;

    private LocalDateTime editDate;

    private int recommendedNo;
}
