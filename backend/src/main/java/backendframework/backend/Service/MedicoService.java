package backendframework.backend.Service;

import backendframework.backend.DTO.AtualizarMedicoDTO;
import backendframework.backend.DTO.MedicoDTO;
import backendframework.backend.DTO.MedicoGetDTO;
import backendframework.backend.Entity.Medico;
import backendframework.backend.Mapper.MedicoMapper;
import backendframework.backend.Repository.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MedicoService {

    private final MedicoRepository medicoRepository;
    private final MedicoMapper medicoMapper = MedicoMapper.INSTANCE;
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public MedicoService(MedicoRepository medicoRepository, JdbcTemplate jdbcTemplate) {
        this.medicoRepository = medicoRepository;
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<MedicoGetDTO> listarMedicos() {
        String sql = """
        SELECT m.id,
               m.nome_medico,
               tc.nome AS tipo_consulta_nome,
               la.nome AS local_atendimento_nome
        FROM medico m
        JOIN tipo_consulta tc ON m.tipo_consulta_id = tc.id
        JOIN local_atendimento la ON m.local_atendimento_id = la.id
        ORDER BY m.id
        """;

        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            MedicoGetDTO dto = new MedicoGetDTO();
            dto.setId(rs.getLong("id"));
            dto.setNome(rs.getString("nome_medico"));
            dto.setTipoAtendimento(rs.getString("tipo_consulta_nome"));
            dto.setLocalAtendimento(rs.getString("local_atendimento_nome"));
            return dto;
        });
    }

    public void deletarMedico(Long id) {
        medicoRepository.deleteById(id);
    }

    public MedicoGetDTO listarMedico(Long id) {
        String sql = """
        SELECT m.id,
               m.nome_medico,
               m.tipo_consulta_id,
               m.local_atendimento_id,
               tc.nome AS tipo_consulta_nome,
               la.nome AS local_atendimento_nome
        FROM medico m
        JOIN tipo_consulta tc ON m.tipo_consulta_id = tc.id
        JOIN local_atendimento la ON m.local_atendimento_id = la.id
        WHERE m.id = ?
    """;

        return jdbcTemplate.queryForObject(sql, new Object[]{id}, (rs, rowNum) -> {
            MedicoGetDTO dto = new MedicoGetDTO();
            dto.setId(rs.getLong("id"));
            dto.setNome(rs.getString("nome_medico"));
            dto.setTipo_consulta_id(rs.getLong("tipo_consulta_id"));
            dto.setLocal_atendimento_id(rs.getLong("local_atendimento_id"));
            dto.setTipoAtendimento(rs.getString("tipo_consulta_nome"));
            dto.setLocalAtendimento(rs.getString("local_atendimento_nome"));
            return dto;
        });
    }

    public boolean atualizarMedico(Long id, AtualizarMedicoDTO atualizarMedicoDTO) {
        Medico medico = medicoRepository.findById(id).orElse(null);
        if (atualizarMedicoDTO != null) {
            if (atualizarMedicoDTO.getNome() != null) {
                System.out.println("Passou aqui");
                medico.setNome(atualizarMedicoDTO.getNome());
            }
            if (atualizarMedicoDTO.getTipoAtendimento() != null) {
                System.out.println("Passou aqui2");
                medico.setTipo_consulta_id(atualizarMedicoDTO.getTipoAtendimento());
            }
            if (atualizarMedicoDTO.getLocalAtendimento() != null) {
                System.out.println("Passou aqui3");
                medico.setLocal_atendimento_id(atualizarMedicoDTO.getLocalAtendimento());
            }
            medicoRepository.save(medico);
            return true;
        }
        return false;
    }

    public void criarMedico(MedicoDTO medicoDTO) {
        System.out.println(medicoDTO);
        Medico medico = medicoMapper.medicoDTOToMedico(medicoDTO);
        System.out.println(medico);
        medicoRepository.save(medico);
    }
}
