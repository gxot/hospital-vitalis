package backendframework.backend.Controller;

import backendframework.backend.DTO.PacienteInfoDTO;
import backendframework.backend.Entity.Paciente;
import backendframework.backend.Security.PacienteDetails;
import backendframework.backend.Security.PacienteDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/details")
public class PacienteDetailsController {

    private PacienteDetailsService pacienteDetailsService;
    @Autowired
    public PacienteDetailsController(PacienteDetailsService pacienteDetailsService) {
        this.pacienteDetailsService = pacienteDetailsService;
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
}
