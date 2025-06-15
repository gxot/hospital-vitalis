package backendframework.backend.DAO;

import backendframework.backend.DTO.PlanoSaudeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PlanoSaudeDAO {


    private JdbcTemplate template;

    @Autowired
    public PlanoSaudeDAO(JdbcTemplate template) {
        this.template = template;
    }

    public List<PlanoSaudeDTO> fetchNames () {
        String sql = "select nome from planosaude";

        return template.query(sql, (rs,rowNum) ->
            new PlanoSaudeDTO(rs.getString("nome"))
        );
    }
}
