package backendframework.backend.DAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PlanoSaudeDAO {


    private final JdbcTemplate template;

    @Autowired
    public PlanoSaudeDAO(JdbcTemplate template) {
        this.template = template;
    }

    public List<String> fetchNames() {
        String sql = "SELECT nome FROM plano_saude";
        return template.queryForList(sql, String.class);
    }
}
