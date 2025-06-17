package backendframework.backend.Controller;

import backendframework.backend.DTO.AtualizarDadosPacienteInfoDTO;
import backendframework.backend.DTO.PacienteInfoDTO;
import backendframework.backend.Entity.Paciente;
import backendframework.backend.Security.PacienteDetails;
import backendframework.backend.Security.PacienteDetailsService;
import backendframework.backend.Service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/details")
public class PacienteDetailsController {

    private final PacienteService pacienteService;
    private PacienteDetailsService pacienteDetailsService;
    @Autowired
    public PacienteDetailsController(PacienteDetailsService pacienteDetailsService, PacienteService pacienteService) {
        this.pacienteDetailsService = pacienteDetailsService;
        this.pacienteService = pacienteService;
    }

    @GetMapping("/userinfo")
    public PacienteInfoDTO detalhesPaciente(Authentication authentication) {
        String email = authentication.getName();
        PacienteDetails details = pacienteDetailsService.loadUserByUsername(email);
        Paciente paciente = details.getPaciente();
        PacienteInfoDTO dto = new PacienteInfoDTO();
        dto.setNome(paciente.getNome());
        return dto;
    }

    @GetMapping("/attuserinfo")
    public AtualizarDadosPacienteInfoDTO atualizarPaciente(Authentication authentication) {
        String email = authentication.getName();
        PacienteDetails details = pacienteDetailsService.loadUserByUsername(email);
        Paciente paciente = details.getPaciente();
        AtualizarDadosPacienteInfoDTO dto = new AtualizarDadosPacienteInfoDTO();
        dto.setNome(paciente.getNome());
        dto.setCpf(paciente.getCpf());
        dto.setEmail(paciente.getEmail());
        dto.setDataNascimento(paciente.getDataNascimento());
        String planoSaude = pacienteService.findPlanoSaudeById(paciente.getPlano_de_saude_id());
        dto.setPlanoSaude(planoSaude);
        return dto;
    }
}
