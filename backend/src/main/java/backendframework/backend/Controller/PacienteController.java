package backendframework.backend.Controller;

import backendframework.backend.DTO.PacienteDTO;
import backendframework.backend.Entity.Paciente;
import backendframework.backend.Mapper.PacienteMapper;
import backendframework.backend.Service.PacienteService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {

    private final PacienteService pacienteService;
    private final PacienteMapper pacienteMapper = PacienteMapper.INSTANCE;

    @Autowired
    public PacienteController(PacienteService pacienteService) {

        this.pacienteService = pacienteService;
    }
    @PostMapping("/criar_paciente")
    public void createPaciente(@RequestBody PacienteDTO pacienteDTO) {
        Paciente paciente = pacienteMapper.PacienteDTOToPaciente(pacienteDTO);
        pacienteService.createPaciente(paciente);
    }

    @PostMapping("/checar_senha")
    public boolean checarSenha(@RequestBody Map<String, String> body, Authentication authentication) {
        if(pacienteService.checarSenha(body.get("senhaAtual"), authentication.getName())) {
            return true;
        }
        return false;
    }

    @PutMapping("/atualizar_senha")
    public boolean atualizarSenha(@RequestBody Map<String, String> body, Authentication authentication) {
        if(pacienteService.atualizarSenha(body.get("novaSenha"), authentication.getName())){
            System.out.println("Passou aqui4");
            return true;
        }
        System.out.println("Passou aqui5");
        return false;
    }

    @PutMapping("/atualizar_paciente")
    public boolean atualizarPaciente(@RequestBody PacienteDTO pacienteDTO, Authentication authentication) throws BadRequestException {
        if(pacienteService.atualizarPaciente(pacienteDTO, authentication.getName())) {
            return true;
        }
        return false;
    }

    @DeleteMapping("/deletar_conta")
    public boolean deletarConta(Authentication authentication) {
        if(pacienteService.deletarConta(authentication.getName())) {
            return true;
        }
        return false;
    }


}
