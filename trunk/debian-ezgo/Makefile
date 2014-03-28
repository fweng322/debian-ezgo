#!/usr/bin/make -f

BLENDMAKEFILE=/usr/share/blends-dev/Makefile

CheckBLENDMakefile := $(shell if [ -e $(BLENDMAKEFILE) ] ; then echo 1 ; else echo 0 ; fi)
ifeq ($(CheckBLENDMakefile),1)
    include $(BLENDMAKEFILE)
else
    err := $(shell echo "$(BLENDMAKEFILE) is missing.  Please install blends-dev package!")
endif

dummy:
	@echo $(err)
