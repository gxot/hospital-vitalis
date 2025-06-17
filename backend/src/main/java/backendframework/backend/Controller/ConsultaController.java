package backendframework.backend.Controller;

import backendframework.backend.DTO.ConsultaDTO;
import backendframework.backend.DTO.LocalAtendimentoDTO;
import backendframework.backend.DTO.MedicoGetDTO;
import backendframework.backend.DTO.TipoAtendimentoDTO;
import backendframework.backend.Entity.Consulta;
import backendframework.backend.Mapper.ConsultaMapper;
import backendframework.backend.Service.ConsultaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/consulta")
public class ConsultaController {

    private ConsultaService consultaService;
    private ConsultaMapper consultaMapper = ConsultaMapper.INSTANCE;
    @Autowired
    public ConsultaController(ConsultaService consultaService) {
        this.consultaService = consultaService;
    }

    @GetMapping("/tipo_atendimento")
    public List<TipoAtendimentoDTO> fetchTipoAtendimento() {
        System.out.println(consultaService.fetchTipoAtendimento());
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
    public ResponseEntity<?> agendarConsulta(@RequestBody ConsultaDTO consultaDTO) {
        System.out.println(consultaDTO.toString());
        Consulta consulta = consultaMapper.consultaDTOToConsulta(consultaDTO);
        System.out.println(consulta.toString());
        boolean sucesso = consultaService.agendarConsulta(consulta);

        if (sucesso) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }
}
