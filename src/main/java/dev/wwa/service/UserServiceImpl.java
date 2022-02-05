package dev.wwa.service;

import dev.wwa.domain.User;
import dev.wwa.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.NoResultException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Override
    @Transactional
    public Long join(User user) {
        validateDuplicateUser(user);
        userRepository.save(user);
        return user.getId();
    }

    private void validateDuplicateUser(User user) {
        try {
            userRepository.findByEmail(user.getEmail());
        } catch (EmptyResultDataAccessException | NoResultException e) {
            return;
        }
        throw new IllegalStateException("이미 존재하는 회원입니다.");
    }

    @Override
    @Transactional(readOnly = true)
    public User findOneUser(String email) {
        return userRepository.findOne(userRepository.findByEmail(email).getId());
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findUsers() {
        return userRepository.findAll();
    }

    @Override
    @Transactional
    public User modifyUserInfo(User user) {
        userRepository.modify(user);
        return userRepository.findOne(user.getId());
    }

    @Override
    public User modifyUserName(Long id, String name) {
        userRepository.modifyName(id, name);
        return userRepository.findOne(id);
    }

    @Override
    public User modifyUserPassword(Long id, String password) {
        userRepository.modifyPassword(id, password);
        return userRepository.findOne(id);
    }

    @Override
    public User modifyUserProfilePic(Long id, String path) {
        userRepository.modifyProfilePic(id, path);
        return userRepository.findOne(id);
    }

    @Override
    public User modifyUserPhone(Long id, String phone) {
        userRepository.modifyPhone(id, phone);
        return userRepository.findOne(id);
    }

    @Override
    @Transactional
    public void deleteAccount(Long id) {
        userRepository.delete(id);
    }
}
