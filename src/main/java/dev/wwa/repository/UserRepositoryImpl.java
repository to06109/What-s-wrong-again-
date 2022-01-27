package dev.wwa.repository;

import dev.wwa.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserRepositoryImpl implements UserRepository {

    private final EntityManager em;

    @Override
    public void save(User user) {
        em.persist(user);
    }

    @Override
    public User findOne(Long id) {
        return em.find(User.class, id);
    }

    @Override
    public List<User> findAll() {
        return em.createQuery("select u from User u", User.class).getResultList();
    }

    @Override
    public User findByEmail(String email) {
        return em.createQuery("select u from User u where u.email = :email", User.class).setParameter("email", email).getSingleResult();
    }

    @Override
    public void modifyPassword(Long id, String password) {
        Query query = em.createQuery("update User u set u.password = :password where u.id = :id");
        query.setParameter("password", password);
        query.setParameter("id", id);
        int result = query.executeUpdate();
    }

    @Override
    public void modifyName(Long id, String name) {
//        em.createQuery("update User set name = :name where id = :id", User.class).setParameter("name", name).executeUpdate();
        Query query = em.createQuery("update User u set u.name = :name where u.id = :id");
        query.setParameter("name", name);
        query.setParameter("id", id);
        int result = query.executeUpdate();
    }

    @Override
    public void modifyProfilePic(Long id, String profile_pic_path) {
        Query query = em.createQuery("update User u set u.profile_pic_path = :profile_pic_path where u.id = :id");
        query.setParameter("profile_pic_path", profile_pic_path);
        query.setParameter("id", id);
        int result = query.executeUpdate();
    }

    @Override
    public void modifyPhone(Long id, String phone) {
        Query query = em.createQuery("update User u set u.phone = :phone where u.id = :id");
        query.setParameter("phone", phone);
        query.setParameter("id", id);
        int result = query.executeUpdate();
    }

    @Override
    public void modify(User user) {
        Long id = user.getId();
        String name = user.getName();
        String password = user.getPassword();
        String phone = user.getPhone();
        String profilePicPath = user.getProfile_pic_path();
        em.createQuery("update User u set u.name = :name, u.password = :password, u.phone = :phone, u.profile_pic_path = :profilePicPath where u.id = :id", User.class);
    }

    @Override
    public void delete(Long id) {
        User user = em.find(User.class, id);
        em.remove(user);
    }
}
