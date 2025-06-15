package backendframework.backend.Controller;

import backendframework.backend.DTO.PacienteDTO;
import backendframework.backend.Entity.Paciente;
import backendframework.backend.Mapper.PacienteMapper;
import backendframework.backend.Service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {

    private PacienteService pacienteService;
    private PacienteMapper pacienteMapper = PacienteMapper.INSTANCE;

    @Autowired
    public PacienteController(PacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }
    @PostMapping("/criar_paciente")
    public void createPaciente(@RequestBody PacienteDTO pacienteDTO) {
        Paciente paciente = pacienteMapper.PacienteDTOToPaciente(pacienteDTO);
        pacienteService.createPaciente(paciente);
    }
}
