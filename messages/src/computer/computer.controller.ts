import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
import { ComputerModule } from './computer.module';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService
  ) {}

  @Get()
  run() {
    return [
      this.cpuService.compute(1, 2),
      this.diskService.getData()
    ];
  }
}
