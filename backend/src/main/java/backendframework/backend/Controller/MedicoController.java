package backendframework.backend.Controller;

import backendframework.backend.DTO.AtualizarMedicoDTO;
import backendframework.backend.DTO.MedicoDTO;
import backendframework.backend.DTO.MedicoGetDTO;
import backendframework.backend.Service.MedicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medicos")
public class MedicoController {
    private MedicoService medicoService;
    @Autowired
    public MedicoController(MedicoService medicoService) {
        this.medicoService = medicoService;
    }

    @GetMapping("/listar_medicos")
    public List<MedicoGetDTO> listarMedicos() {
        System.out.println(medicoService.listarMedicos());
        return medicoService.listarMedicos();
    }

    @GetMapping("/listar_dados_medico/{id}")
    public MedicoGetDTO listarMedico(@PathVariable Long id) {
        return medicoService.listarMedico(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deletarMedico(@PathVariable Long id) {
        medicoService.deletarMedico(id);
    }

    @PutMapping("/att/{id}")
    public void atualizarMedico(@PathVariable Long id, @RequestBody AtualizarMedicoDTO atualizarMedicoDTO) {
        medicoService.atualizarMedico(id, atualizarMedicoDTO);
    }

    @PostMapping("/criar_medico")
    public void criarMedico(@RequestBody MedicoDTO medicoDTO) {
        medicoService.criarMedico(medicoDTO);
    }
}
