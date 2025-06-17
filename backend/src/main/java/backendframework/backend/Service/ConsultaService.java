package backendframework.backend.Service;

import backendframework.backend.DTO.LocalAtendimentoDTO;
import backendframework.backend.DTO.MedicoGetDTO;
import backendframework.backend.DTO.TipoAtendimentoDTO;
import backendframework.backend.Entity.Consulta;
import backendframework.backend.Repository.ConsultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultaService {

    private final ConsultaRepository consultaRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public ConsultaService(ConsultaRepository consultaRepository) {
        this.consultaRepository = consultaRepository;
    }

    public List<TipoAtendimentoDTO> fetchTipoAtendimento() {
        String sql = "SELECT id, nome FROM tipo_consulta";
        return jdbcTemplate.query(sql, (rs, rowNum) ->
                TipoAtendimentoDTO.builder()
                        .id(rs.getLong("id"))
                        .nome(rs.getString("nome"))
                        .build()
        );
    }

    public List<LocalAtendimentoDTO> fetchLocais(Long tipoId) {
        String sql = """
            SELECT DISTINCT l.id, l.nome
            FROM medico m
            JOIN local_atendimento l ON m.local_atendimento_id = l.id
            WHERE m.tipo_consulta_id = ?
            """;
        return jdbcTemplate.query(sql, new Object[]{tipoId.intValue()}, (rs, rowNum) ->
                LocalAtendimentoDTO.builder()
                        .id(rs.getLong("id"))
                        .nome(rs.getString("nome"))
                        .build()
        );
    }

    public List<MedicoGetDTO> fetchMedicos(Long tipoId, Long localId) {
        String sql = """
            SELECT m.id, m.nome_medico
            FROM medico m
            WHERE m.tipo_consulta_id = ? AND m.local_atendimento_id = ?
            """;
        return jdbcTemplate.query(sql, new Object[]{tipoId.intValue(), localId.intValue()}, (rs, rowNum) ->
                MedicoGetDTO.builder()
                        .id(rs.getLong("id"))
                        .nome(rs.getString("nome_medico"))
                        .build()
        );
    }

    public boolean agendarConsulta(Consulta consulta) {
        Consulta consultaMarcada = consultaRepository.save(consulta);
        if (consultaMarcada != null) {
            return true;
        }
        return false;
    }

}
