package backendframework.backend.Service;

import backendframework.backend.DTO.*;
import backendframework.backend.Entity.Consulta;
import backendframework.backend.Entity.Paciente;
import backendframework.backend.Repository.ConsultaRepository;
import backendframework.backend.Security.PacienteDetailsService;
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
    private PacienteDetailsService pacienteDetailsService;

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

    public List<ConsultaMarcadaDTO> fetchConsultasMarcadas(String email) {
        Paciente paciente = pacienteDetailsService.loadUserByUsername(email).getPaciente();
        Long pacienteId = paciente.getId();

        String sql = """
        SELECT c.id,
               tc.nome AS tipo_nome,
               la.nome AS local_nome,
               m.nome_medico AS medico_nome,
               c.data_consulta
        FROM consulta c
        JOIN tipo_consulta tc ON c.tipo_consulta_id = tc.id
        JOIN local_atendimento la ON c.local_atendimento_id = la.id
        JOIN medico m ON c.medico_id = m.id
        WHERE c.paciente_id = ?
        ORDER BY c.data_consulta DESC
        """;

        return jdbcTemplate.query(sql, new Object[]{pacienteId}, (rs, rowNum) -> {
            ConsultaMarcadaDTO dto = new ConsultaMarcadaDTO();
            dto.setId(rs.getLong("id"));
            dto.setTipoNome(rs.getString("tipo_nome"));
            dto.setLocalNome(rs.getString("local_nome"));
            dto.setMedicoNome(rs.getString("medico_nome"));
            dto.setDataConsulta(rs.getDate("data_consulta").toLocalDate());
            return dto;
        });
    }

    public boolean deletarConsulta(Long id) {
        consultaRepository.deleteById(id);
        return true;
    }

    public List<LocalAtendimentoDTO> fetchLocaisAtendimento() {
        String sql = "SELECT id, nome FROM local_atendimento";
        return jdbcTemplate.query(sql, (rs, rowNum) ->
                LocalAtendimentoDTO.builder()
                        .id(rs.getLong("id"))
                        .nome(rs.getString("nome"))
                        .build()
        );
    }
}
