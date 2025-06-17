package backendframework.backend.Security;

import backendframework.backend.Entity.Paciente;
import backendframework.backend.Repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class PacienteDetailsService implements UserDetailsService {
    private final PacienteRepository pacienteRepository;

    public PacienteDetailsService(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    @Override
    public PacienteDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Paciente paciente = pacienteRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Paciente não encontrado"));
        return new PacienteDetails(paciente);
    }
}
