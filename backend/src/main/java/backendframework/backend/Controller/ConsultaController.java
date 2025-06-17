package backendframework.backend.Controller;

import backendframework.backend.DTO.*;
import backendframework.backend.Entity.Consulta;
import backendframework.backend.Entity.Paciente;
import backendframework.backend.Mapper.ConsultaMapper;
import backendframework.backend.Security.PacienteDetailsService;
import backendframework.backend.Service.ConsultaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/consulta")
public class ConsultaController {

    private ConsultaService consultaService;
    private PacienteDetailsService pacienteDetailsService;
    private ConsultaMapper consultaMapper = ConsultaMapper.INSTANCE;
    @Autowired
    public ConsultaController(ConsultaService consultaService, PacienteDetailsService pacienteDetailsService) {
        this.pacienteDetailsService = pacienteDetailsService;
        this.consultaService = consultaService;
    }

    @GetMapping("/tipo_atendimento")
    public List<TipoAtendimentoDTO> fetchTipoAtendimento() {
        return consultaService.fetchTipoAtendimento();
    }

    @GetMapping("/locais")
    public List<LocalAtendimentoDTO> fetchLocais(@RequestParam Long tipo) {
        return consultaService.fetchLocais(tipo);
    }

    @GetMapping("/medicos")
    public List<MedicoGetDTO> fetchMedicos(@RequestParam Long tipo, @RequestParam Long local) {
        List<MedicoGetDTO> medicos = consultaService.fetchMedicos(tipo, local);
        return medicos != null ? medicos : new ArrayList<>();
    }

    @PostMapping("/agendar")
    public ResponseEntity<?> agendarConsulta(@RequestBody ConsultaDTO consultaDTO, Authentication authentication) {
        Paciente paciente = pacienteDetailsService.loadUserByUsername(authentication.getName()).getPaciente();
        consultaDTO.setPacienteId(paciente.getId());
        System.out.println(consultaDTO);
        Consulta consulta = consultaMapper.consultaDTOToConsulta(consultaDTO);
        System.out.println(consulta);
        boolean sucesso = consultaService.agendarConsulta(consulta);
        if (sucesso) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/agendamentos")
    public List<ConsultaMarcadaDTO> fetchConsultasMarcadas(Authentication authentication) {
        return consultaService.fetchConsultasMarcadas(authentication.getName());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletarConsulta(@PathVariable Long id) {
        boolean sucesso = consultaService.deletarConsulta(id);
        if (sucesso) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.status(403).body("Não autorizado ou consulta não encontrada.");
    }
}
