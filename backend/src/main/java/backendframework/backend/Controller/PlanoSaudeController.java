package backendframework.backend.Controller;

import backendframework.backend.DAO.PlanoSaudeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/planosdesaude")
public class PlanoSaudeController {

    @Autowired
    private PlanoSaudeDAO planoSaudeDAO;

    @GetMapping("/listar_planos_de_saude")
    public List<String> listarPlanosDeSaude() {
        return planoSaudeDAO.fetchNames();
    }
}
