package backendframework.backend.Service;

import backendframework.backend.Entity.Paciente;
import backendframework.backend.Repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PacienteService {

    private final PacienteRepository pacienteRepository;

    @Autowired
    public PacienteService(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    public void createPaciente(Paciente paciente) {
        pacienteRepository.save(paciente);
    }
}
