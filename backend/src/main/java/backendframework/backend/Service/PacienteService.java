package backendframework.backend.Service;

import backendframework.backend.DTO.MedicoGetDTO;
import backendframework.backend.DTO.PacienteDTO;
import backendframework.backend.DTO.PlanoSaudeDTO;
import backendframework.backend.Entity.Paciente;
import backendframework.backend.Repository.PacienteRepository;
import backendframework.backend.Security.PacienteDetails;
import backendframework.backend.Security.PacienteDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class PacienteService {

    private final PacienteRepository pacienteRepository;
    private final PacienteDetailsService pacienteDetailsService;
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PacienteService(PacienteRepository pacienteRepository, JdbcTemplate jdbcTemplate, PacienteDetailsService pacienteDetailsService) {
        this.pacienteDetailsService = pacienteDetailsService;
        this.pacienteRepository = pacienteRepository;
        this.jdbcTemplate = jdbcTemplate;
    }

    public void createPaciente(Paciente paciente) {
        pacienteRepository.save(paciente);
    }

    public String findPlanoSaudeById (Long id) {
            String sql = "SELECT nome FROM plano_saude WHERE id = ?";
            return jdbcTemplate.queryForObject(sql, new Object[]{id}, String.class);
    }

    public boolean atualizarPaciente(PacienteDTO pacienteDTO, String email) {
        PacienteDetails details = pacienteDetailsService.loadUserByUsername(email);
        Paciente paciente = details.getPaciente();
        if (pacienteDTO.getNome() != null) {
            paciente.setNome(pacienteDTO.getNome());
        }
        if (pacienteDTO.getEmail() != null) {
            paciente.setEmail(pacienteDTO.getEmail());
        }
        if (pacienteDTO.getDataNascimento() != null) {
            paciente.setDataNascimento(pacienteDTO.getDataNascimento());
        }
        if (pacienteDTO.getPlano_de_saude_id() != null) {
            paciente.setPlano_de_saude_id(pacienteDTO.getPlano_de_saude_id());
        }
        pacienteRepository.save(paciente);
        UserDetails userDetails = pacienteDetailsService.loadUserByUsername(pacienteDTO.getEmail());
        Authentication newAuth = new UsernamePasswordAuthenticationToken(
                userDetails,
                userDetails.getPassword(),
                userDetails.getAuthorities()
        );
        SecurityContextHolder.getContext().setAuthentication(newAuth);
        return true;
    }

    public boolean checarSenha(String senha, String email) {
        Paciente paciente = pacienteDetailsService.loadUserByUsername(email).getPaciente();
        System.out.println(senha);
        System.out.println(paciente.getSenha());
        System.out.println(paciente.getEmail());
        if (senha == null) {
            System.out.println("Passou aqui");
            return false;
        }
        if (senha.equals(paciente.getSenha())) {
            System.out.println("Passou aqui2");
            return true;
        }
        System.out.println("Passou aqui3");
        return false;
    }

    public boolean atualizarSenha(String senha, String email) {
        Paciente paciente = pacienteDetailsService.loadUserByUsername(email).getPaciente();
        if (senha != null) {
            paciente.setSenha(senha);
            pacienteRepository.save(paciente);
            UserDetails userDetails = pacienteDetailsService.loadUserByUsername(email);
            Authentication newAuth = new UsernamePasswordAuthenticationToken(
                    userDetails,
                    userDetails.getPassword(),
                    userDetails.getAuthorities()
            );
            SecurityContextHolder.getContext().setAuthentication(newAuth);
            return true;
        }
        return false;
    }

    public boolean deletarConta(String email) {
        Paciente paciente = pacienteDetailsService.loadUserByUsername(email).getPaciente();
        pacienteRepository.delete(paciente);
        return true;
    }

}
