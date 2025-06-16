package backendframework.backend.DAO;

import backendframework.backend.DTO.PlanoSaudeDTO;
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

    public List<PlanoSaudeDTO> fetchNames() {
        String sql = "SELECT id, nome FROM plano_saude";
        return template.query(sql, (rs, rowNum) -> PlanoSaudeDTO.builder()
                .id(rs.getLong("id"))
                .nome(rs.getString("nome"))
                .build()
        );
    }
}
